import React, { Component } from 'react'
// import { Document, Page } from 'react-pdf';
import pdfContent from '../../../src/img/222.pdf'
// import pdfContent222 from '../../../src/img/111.jpeg'
import { Viewer } from '@react-pdf-viewer/core';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';

// const [numPages, setNumPages] = useState(null);
// const [pageNumber, setPageNumber] = useState(1);

class Pdf extends React.Component {
  constructor() {
    super()
    this.state = {
      pageNumber: 1,
      numPages: 1,
    }
  }

  componentDidMount = () => {

  }

  onDocumentLoadSuccess = ({ numPages }) => {//numPages是总页数
    console.log(111)
    this.setState({ numPages });
  };

  render() {
    return (
      <div>
        pdf
        {/* <img src={pdfContent222} />
        <Document
          file={pdfContent}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={this.state.pageNumber} />
        </Document>
        <p>Page {this.state.pageNumber} of {this.state.numPages}</p> */}

        <Viewer fileUrl={pdfContent} />
      </div >
    )
  }
}

export default Pdf