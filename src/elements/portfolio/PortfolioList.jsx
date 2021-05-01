import React, { Component } from "react";

const PortfolioListContent = [
  {
    image: "image-2",
    category: "News & Blogs",
    title: "Civism",
    link: "https://civism.org"
  }
];

class PortfolioList extends Component {
  render() {
    const { column, styevariation } = this.props;
    const list = PortfolioListContent.slice(0, this.props.item);
    return (
      <React.Fragment>
        {list.map((value, index) => (
          <div className={`${column}`} key={index}>
          <a href={value.link}>
            <div className={`portfolio ${styevariation}`}>
              <div className="thumbnail-inner">
                <div className={`thumbnail ${value.image}`}></div>
                <div className={`bg-blr-image ${value.image}`}></div>
              </div>
              <div className="content">
                <div className="inner">
                  <p>{value.category}</p>
                  <h4>
                    <a href={value.link} rel="noreferrer" target="_blank">
                      {value.title}
                    </a>
                  </h4>
                </div>
              </div>
            </div></a>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
export default PortfolioList;
