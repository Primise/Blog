import React from "react";
import Head from "next/head";
import { Row, Col, Icon, Breadcrumb, Affix } from "antd";
import Header from "../components/Header";
import Author from "../components/author"
import Advert from "../pages/Advert"
import Footer from "../components/Footer"
// import ReactMarkdown from 'react-markdown'
// import MarkNav from "markdown-navbar"
import "markdown-navbar/dist/navbar.css"
import "../public/pages/detailed.css"
import marked from 'marked'
// import hljs from "highlight.js";
// import 'highlight.js/styles/monokai-sublime.css';
import Tocify from '../components/tocify.tsx'

import axios from 'axios'
const Detailed = (props) => {
  let articleContent = props.article_content;

  const tocify = new Tocify();
  const renderer = new marked.Renderer();
  renderer.heading = function (text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}> ${text}</h${level}><a>\n`
  }
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      // return hljs.highlightAuto(code).value;
    }
  });
  let html = marked(props.article_content)
  return (
    <div>
      <Head>
        <title> Detailed </title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item>{props.typeName}</Breadcrumb.Item>
                <Breadcrumb.Item>{props.title}</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <div className="detailed-title">
                React实战后台框里平台教程---技术壮Blog开发
               </div>
              <div className="list-icon center">
                <span><Icon type="calendar" /> {props.addTime}</span>
                <span><Icon type="folder" />{props.typeName}</span>
                <span><Icon type="fire" /> {props.view_count}</span>
              </div>
              <div className="detailed-content"
                dangerouslySetInnerHTML = {{ __html: html }}   >
              </div>
            </div>
          </div>
        </Col>
        <Col className="comm-left" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <div>
            <Affix offsetTop={10}>
              <div className="detailed-nav comm-box">
                <div className="nav-title">文章目录</div>
                <div className="toc-list">
                  {tocify && tocify.render()}
                </div>
              </div>
            </Affix>

          </div>
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

// Detailed.getInitialProps = async (context)=>{
Detailed.getInitialProps = async (context) => {

  console.log(context.query.id)
  let id = context.query.id
  const promise = new Promise((resolve) => {

    axios('http://127.0.0.1:7001/default/getArticleById/' + id).then(
      (res) => {
        console.log(res)
        resolve(res.data.data[0])
      }
    )
  })

  return await promise
}
export default Detailed;
