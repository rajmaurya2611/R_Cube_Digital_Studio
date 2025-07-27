import { Row, Col } from "antd";
import logo from "../assets/R Cube Digital Studio logo.png"; // Adjust the path as needed

const RCubeHero = () => {
  return (
    <section className="bg-white pt-32 py-16 px-4 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto">
        <Row
          gutter={[32, 32]}
          align="middle"
          justify="center"
          className="w-full"
        >
          {/* Left Column */}
          <Col xs={24} md={12}>
            <div className="text-left text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                R Cube Digital Studio
              </h1>
              <p className="text-lg md:text-xl text-gray-700">
                Where we build apps that solve real problems.
              </p>
            </div>
          </Col>

          {/* Right Column */}
          <Col xs={24} md={12}>
            <div className="flex justify-center md:justify-end">
              <img
                src={logo}
                alt="R Cube Logo"
                width={200}
                style={{ objectFit: "contain" }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default RCubeHero;
