import Doctor_Card from "../../../components/Module/Doctor_Card/Doctor_Card";

const All_Doctors = ({ doctor }) => {
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
            to={`/doctor-profile/${_id}`}
        />
    );
};

export default All_Doctors;