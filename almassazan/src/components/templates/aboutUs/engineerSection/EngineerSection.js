"use client";
import EngineerCard from "@/components/modules/engineerCard/EngineerCard";
import SectionTittle from "@/components/modules/sectionTittle/SectionTittle";
import { fetchData, reload } from "@/utils/tools";
import Link from "next/link";
import { useEffect, useState } from "react";

const EngineerSection = ({ isEnLang = false }) => {
  const [render, setRender] = useState(null);
  const [engineers, setEngineers] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchEngineers = async () => {
    await fetchData(
      `/api/engineer/${isEnLang ? "en" : "fa"}`,
      setData,
      setLoading,
      setError
    );
  };
  useEffect(() => {
    fetchEngineers();
    setTimeout(() => {
      setRender(reload);
    }, 400);
  }, [reload]);
  useEffect(() => {
    setEngineers((prev) => data);
  }, [data]);

  return data ? (
    <div className="w-full flex flex-col items-center pt-12 lg:pt-20">
      <SectionTittle tittle={isEnLang ? "Our engineers" : "مهندسان ما"} />
      <div
        className={`w-full mt-2 lg:mt-6 grid  grid-cols-2 lg:grid-cols-4 gap-3  lg:gap-6 auto-cols-max ${
          isEnLang ? "dir-ltr" : "dir-rtl"
        }`}
      >
        {render
          ? engineers?.map((engineer) => {
              return (
                <Link
                  key={engineer._id}
                  href={`/${isEnLang ? "en" : "fa"}/About-us/engineer?id=${
                    engineer._id
                  }`}
                  scroll={false}
                >
                  <EngineerCard
                    isEnLang={isEnLang}
                    name={engineer.fullName}
                    role={engineer.role}
                    image={engineer.image}
                  />
                </Link>
              );
            })
          : data?.map((engineer) => {
              return (
                <Link
                  key={engineer._id}
                  href={`/${isEnLang ? "en" : "fa"}/About-us/engineer?id=${
                    engineer._id
                  }`}
                  scroll={false}
                >
                  <EngineerCard
                    isEnLang={isEnLang}
                    name={engineer.fullName}
                    role={engineer.role}
                    image={engineer.image}
                  />
                </Link>
              );
            })}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default EngineerSection;
