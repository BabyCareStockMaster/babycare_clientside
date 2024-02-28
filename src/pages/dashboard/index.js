import { useEffect, useRef, useState } from "react";
import Card from "../../ui-components/Card";
import Modal from "../../ui-components/Modal";
import styles from "./Home.module.css";

import DoughnutChartExample from "../../components/DoughnutChartExample";
import HeaderSection from "../../ui-components/HeaderSection";
import DataCard from "../../ui-components/DataCard";
import { SlCalender } from "react-icons/sl";
import ActionButton from "../../ui-components/ActionButton";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Section from "../../ui-components/Section";



export default function Dashboard() {

  return (
    <>
      <HeaderSection
        heading={"Dashboard"}
        subHeading={"Welcome to BabyCare dashboard"}
      />

      <Section>
        <DataCard
          label={"Warehouse 1"}
          value={"10 Product"}
        />
        <DataCard
          label={"Warehouse 2"}
          value={"2 Product"}
        />
        <DataCard
          label={"Warehouse 3"}
          value={"3 Product"}
        />
      </Section>

     

    </>
  );
}
