import { useRouter } from "next/router";

export default function Person() {
  const router = useRouter();
  console.log(router);
  return <h2>Bruno's car</h2>;
}
