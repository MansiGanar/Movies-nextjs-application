import { Header } from "../../components/Header";

// export default function Contact() {
function Contact() {
  return (
    <div className="mt-6" style={{ textAlign: "center" }}>
      <Header>Contact page</Header>
      <p className="mt-5">We would be happy to connect with you.</p>
      <p>You can contact us with</p>
      <p style={{ fontSize: "1.5rem" }}>"nextapplication@fake.com"</p>
    </div>
  );
}

export default Contact;
