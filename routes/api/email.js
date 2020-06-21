const express = require("express");
const router = express.Router();
const config = require("config");
const sgMail = require("@sendgrid/mail");
const send_grid = config.get("send_grid");
const validator = require("validator");
sgMail.setApiKey(send_grid);

// @route   POST api/posts/youtube/create
// @desc    create a post youtube
// @access  Private
router.post(
  "/",

  async (req, res) => {
    const { email, name, message, purpose } = req.body;

    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: "Please enter a valid email" });
    }

    if (!name) {
      return res.status(400).json({ error: "Please enter a name" });
    }
    if (!message) {
      return res.status(400).json({ error: "Please enter a message" });
    }
    try {
      const msg = {
        to: "philliplangmartinez@gmail.com",
        from: email,
        templateId: "d-9611233d43b840b8bc5eeaff302644d3",
        dynamic_template_data: {
          subject: purpose,
          name: name,

          text: message,
        },
      };
      sgMail.send(msg);

      res.json({ msg: "Message has been sent" });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({
        errors: [
          { msg: "Server error. Please try again or refresh the page." },
        ],
      });
    }
  }
);

module.exports = router;
