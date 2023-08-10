import Doctor_Card from "../../../components/Module/Doctor_Card/Doctor_Card";

const Experts_Doctors = ({ doctor }) => {
    const { _id, name, doctor_img, speacialist, doctor_fee, duty_time, ratings, location } = doctor;
    return (
        <Doctor_Card
            img={doctor_img}
            name={name}
            profession_status={speacialist}
            ratings={ratings}
            location={location.diraction}
            duty_time={duty_time}
            visit_fee={doctor_fee}
            to={_id}
        />
    );
};

export default Experts_Doctors;