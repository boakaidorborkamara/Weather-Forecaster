import { Button } from "react-bootstrap";

function TemperatureButton() {
  return (
    <section className="py-5  w-75 d-flex  justify-content-lg-end  justify-content-sm-center">
      <div className="px-2">
        <Button variant="secondary ">°C</Button>
      </div>
      <div className="px-2">
        <Button variant="secondary">°F</Button>
      </div>
    </section>
  );
}

export default TemperatureButton;
