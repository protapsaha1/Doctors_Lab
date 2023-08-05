import useTitle from "../../../components/Hooks/useTitle";
import Banner_Section from "../Banner_Section/Banner_Section";
import Contact_Section from "../Contact_Section/Contact_Section";
import Experts_Doctors_Section from "../Experts_Doctors_Section/Experts_Doctors_Section";
import Hospital_Services from "../Hospital_Services/Hospital_Services";
import Hospital_Time_Address_Contact_Section from "../Hospital_Time_Address_Contact_Section/Hospital_Time_Address_Contact_Section";
import Patients_Feedback_section from "../Patients_Feedback_section/Patients_Feedback_section";

const Home_Page = () => {
    useTitle("Home");
    return (
        <>
            <Banner_Section />
            <Hospital_Services />
            <Hospital_Time_Address_Contact_Section />
            <Patients_Feedback_section />
            <Experts_Doctors_Section />
            <Contact_Section />
        </>
    );
};

export default Home_Page;