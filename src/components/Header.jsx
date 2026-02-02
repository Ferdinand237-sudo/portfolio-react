import profile from "../assets/profile.jpeg";

function Header() {
  return (
    <header style={{ textAlign: "center", marginBottom: "40px" }}>
      <img
        src={profile}
        alt="Photo de profil"
        style={{
          width: "140px",
          height: "140px",
          borderRadius: "50%",
          border: "4px solid var(--accent)",
          marginBottom: "15px"
        }}
      />
      <h1>AWA FERDINAND DESIRE</h1>
      <p style={{ color: "var(--text-muted)" }}>
        Étudiant en Génie Numérique | Développeur web junior
      </p>
    </header>
  );
}

export default Header;
