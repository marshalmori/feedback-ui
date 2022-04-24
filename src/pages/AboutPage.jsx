import Card from "../components/shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about"></div>
      <p>This is a React app to leave feedback for a product or service</p>
      <p>Version: 1.0.0</p>
      <p>
        <a href="/">Back To Home</a>
      </p>
    </Card>
  );
}

export default AboutPage;
