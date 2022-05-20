import React, { PureComponent } from 'react';
import { CContent } from './components/CContent';

export class MasterContent extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CContent {...this.props} nodeId="1:2" />
    </div>
  }
}

export function getComponentFromId(id) {
  if (id === "1:2") return CContent1D2;
  return null;
}

class CContent1D2 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv">
          <div
            id="1:3"
            style={{"marginLeft":27,"width":1363,"minWidth":1363,"height":null,"marginTop":19,"marginBottom":1503,"minHeight":52,"backgroundColor":"rgba(217, 217, 217, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="1:4"
            style={{"marginLeft":46,"width":304,"minWidth":304,"height":null,"marginTop":-1555,"marginBottom":1526,"minHeight":29,"color":"rgba(0, 0, 0, 1)","fontSize":36,"fontWeight":400,"fontFamily":"Inter","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Navigation</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv">
          <div
            id="1:5"
            style={{"marginLeft":709,"width":196,"minWidth":196,"height":null,"marginTop":-1547,"marginBottom":1511,"minHeight":36,"color":"rgba(0, 0, 0, 1)","fontSize":36,"fontWeight":400,"fontFamily":"Inter","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">LOGO</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv">
          <div
            id="1:6"
            style={{"marginLeft":29,"width":1374,"minWidth":1374,"height":null,"marginTop":-1471,"marginBottom":844,"minHeight":627,"backgroundColor":"rgba(217, 217, 217, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":4,"justifyContent":"center"}} className="outerDiv">
          <div
            id="1:7"
            style={{"width":555,"marginLeft":-31,"height":null,"marginTop":-1346,"marginBottom":1020,"minHeight":326,"color":"rgba(0, 0, 0, 1)","fontSize":36,"fontWeight":400,"fontFamily":"Inter","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">CONTENT</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":5}} className="outerDiv">
          <div
            id="1:8"
            style={{"marginLeft":31,"width":1359,"minWidth":1359,"height":null,"marginTop":-800,"marginBottom":116,"minHeight":684,"backgroundColor":"rgba(217, 217, 217, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":6}} className="outerDiv">
          <div
            id="1:9"
            style={{"marginLeft":95,"width":545,"minWidth":545,"height":null,"marginTop":-616,"marginBottom":343,"minHeight":273,"color":"rgba(0, 0, 0, 1)","fontSize":36,"fontWeight":400,"fontFamily":"Inter","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="8">ABOUT US</span>
              <br key="br8" />
            </div>
          </div>
        </div>
        <div style={{"zIndex":7}} className="outerDiv">
          <div
            id="1:10"
            style={{"marginLeft":28,"width":1362,"minWidth":1362,"height":null,"marginTop":-89,"marginBottom":19,"minHeight":70,"backgroundColor":"rgba(217, 217, 217, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":8}} className="outerDiv">
          <div
            id="1:11"
            style={{"marginLeft":134,"width":497,"minWidth":497,"height":null,"marginTop":-72,"marginBottom":32,"minHeight":40,"color":"rgba(0, 0, 0, 1)","fontSize":36,"fontWeight":400,"fontFamily":"Inter","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="6">FOOTER</span>
              <br key="br6" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

