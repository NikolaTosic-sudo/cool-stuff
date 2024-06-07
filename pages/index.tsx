import Intro from "../components/Intro";
import Layout from "../components/Layout";
import { Typography } from "../styles/Typography";
import { Reboot } from "../styles/Reboot";

export default function Home() {
  return (
    <Layout>
      <Reboot />
      <Typography />
      <Intro />
    </Layout>
  );
}
