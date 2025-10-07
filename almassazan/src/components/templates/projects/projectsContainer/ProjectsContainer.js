"use client";
import ProjectCard from "@/components/modules/projectCard/ProjectCard";
import { fetchData } from "@/utils/tools";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const ProjectsContainer = ({ isEnLang = false }) => {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchEngineers = async () => {
      await fetchData(
        `/api/project/${isEnLang ? "en" : "fa"}`,
        setProjects,
        setLoading,
        setError
      );
    };

    fetchEngineers();
  }, []);

  return projects ? (
    <>
      {projects.map((project) => {
        const { _id, title, image } = project;
        return (
          <Link
            key={_id}
            href={`/${isEnLang ? "en" : "fa"}/projects/project?id=${_id}`}
            scroll={false}
          >
            <ProjectCard isEnLang={isEnLang} title={title} image={image} />
          </Link>
        );
      })}
    </>
  ) : (
    <></>
  );
};

export default ProjectsContainer;
