import { NextPage } from "next";
import withLayout from "../components/templates/withLayout";

const Profile: NextPage = () => {
    return (
        <h1>hi, user!</h1>
    )
};

export default withLayout()(Profile);