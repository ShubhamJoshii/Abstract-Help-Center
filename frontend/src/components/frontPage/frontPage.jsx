import React, { useEffect, useState } from "react";
import "./frontPage.css";
import { GoArrowRight } from "react-icons/go";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import axios from "axios";

const cardsData = [
  {
    Heading: "Branches",
    description:
      "Abstract Branches lets you manage, version, and document your designs in one place.",
  },
  {
    Heading: "Manage your account",
    description:
      "Configure your account settings, such as your email, profile details, and password.",
  },
  {
    Heading: "Manage organizations, teams, and projects",
    description:
      "Use Abstract organizations, teams, and projects to organize your people and your work.",
  },
  {
    Heading: "Manage billing",
    description: "Change subscriptions and payment details.",
  },
  {
    Heading: "Authenticate to Abstract",
    description:
      "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
  },
  {
    Heading: "Abstract support",
    description: "Get in touch with a human.",
  },
];

const FrontPage = () => {
  const [infoData, setInfoData] = useState([1, 2, 3, 4]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const fetchInformationCards = async () => {
    await axios
      .get("/api/cards")
      .then((response) => {
        // console.log(response.data);
        if (response.data?.data) {
          setInfoData(response.data.data);
          setLoading(false);
        } else {
          setInfoData([]);
          setLoading(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const searchCard = async () => {
    setInfoData([1, 2]);
    await axios
      .get(`/api/cards/${search}`)
      .then((response) => {
        // console.log(response.data?.data);
        if (Array.isArray(response.data?.data)) {
          setInfoData(response.data.data);
          setLoading(false);
        } else if (response.data?.data) {
          setInfoData([response.data.data]);
          setLoading(false);
        } else {
          setLoading(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchInformationCards();
  }, []);

  return (
    <div id="frontPage">
      <div id="firstSection">
        <h1>How can we help?</h1>
        <div id="searchInput">
          <input
            type="text"
            name="search"
            value={search}
            id="search"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchCard}>
            <GoArrowRight />
          </button>
        </div>
      </div>
      {!loading ? (
        <div id="secondSection">
          {infoData?.map((curr, id) => {
            return (
              <div className="card" key={id}>
                <h3>{curr?.title || <Skeleton />}</h3>
                <p>{curr?.description || <Skeleton count={3} />}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <p id="notFound">Not such card Found</p>
      )}
    </div>
  );
};

export default FrontPage;
