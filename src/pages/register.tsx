import React from "react";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/layout/banner/Banner";
import RegisterAccount from "@/components/containers/authentication/RegisterAccount";
import WithAuth from "@/components/common/WithAuth";

const Register = () => {
  return (
    <Layout header={true} footer={2}>
      {/* <Banner desc="Create Account" page="Create Account" /> */}
      <RegisterAccount />
    </Layout>
  );
};

export default WithAuth(Register);
