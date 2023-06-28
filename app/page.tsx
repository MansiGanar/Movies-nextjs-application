import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <Header>Home</Header>
      <img
        style={{ width: "70%", height: "90vh", margin: "auto" }}
        src="https://cdn.dribbble.com/users/1575908/screenshots/7481309/media/8c9c4b4ca4421234f98643199054813c.jpg?compress=1&resize=1000x750&vertical=center"
        alt="movie-img"
      />
    </div>
  );
}
