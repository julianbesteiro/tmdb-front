import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
//import { useHistory } from "react-router-dom";
import { setContent } from "../store/content";

import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "../../node_modules/swiper/swiper.min.css";
import "./SwiperContent.css";
import { Container, display } from "@mui/system";
import { ImageListItem } from "@mui/material";
import { Typography } from "antd";
import { useDispatch } from "react-redux";

function SwiperContent({ title, content, type }) {
  const navigate = useNavigate();
  //const history = useHistory();
  const dispatch = useDispatch();

  return (
    <>
      <Container sx={{ display: { xs: "none", sm: "block" } }}>
        <h2>{title}</h2>

        <Swiper
          spaceBetween={10}
          navigation
          pagination={{ clickable: true }}
          className="swiper-container"
          slidesPerView={4.3}
        >
          {content &&
            content.map((elem, x) => {
              return (
                <SwiperSlide key={x} className="swiper-item">
                  <img
                    src={
                      elem.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${elem.poster_path}`
                        : " "
                    }
                    alt="Content poster"
                    height="80%"
                    onClick={() => {
                      dispatch(setContent(content));
                      navigate(`/detail/${type}/${elem.id}`);
                    }}
                  />

                  <h3
                    className="titles"
                    onClick={() => {
                      dispatch(setContent(content));
                      navigate(`/detail/${type}/${elem.id}`);
                    }}
                  >
                    {elem.title ? elem.title : elem.name}
                  </h3>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </Container>

      <Container sx={{ display: { xs: "block", sm: "none" } }}>
        <h2>{title}</h2>

        <Swiper
          spaceBetween={10}
          navigation
          pagination={{ clickable: true }}
          className="swiper-container"
          slidesPerView={1.5}
        >
          {content &&
            content.map((elem, x) => {
              return (
                <SwiperSlide key={x} className="swiper-item">
                  <img
                    src={
                      elem.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${elem.poster_path}`
                        : " "
                    }
                    alt="Content poster"
                    height="80%"
                    onClick={() => {
                      dispatch(setContent(content));
                      navigate(`/detail/${type}/${elem.id}`);
                    }}
                  />

                  <h3
                    className="titles"
                    onClick={() => {
                      dispatch(setContent(content));
                      navigate(`/detail/${type}/${elem.id}`);
                    }}
                  >
                    {elem.title ? elem.title : elem.name}
                  </h3>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </Container>
    </>
  );
}

export default SwiperContent;
