import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold pb-20">
              TOGETHER
            </h1>

            <Link href="mailto:owais.ahmed.shariff@gmail.com?subject=Appointment%20Scheduling%20Request&body=Hey,%0A%0AI%20found%20your%20work%20interesting%20and%20would%20like%20to%20schedule%20a%20call%20with%20you.%20Please%20let%20me%20know%20your%20availability.">
              <a>
                <Button type="primary">Schedule a call</Button>
              </a>
            </Link>

            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
