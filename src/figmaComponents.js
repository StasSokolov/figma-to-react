import React from 'react';
import { CButton } from './components/CButton';

export function getComponentFromId(id) {
  if (id === "46:24") return CButton46D24;
  return null;
}

const CButton46D24 = () => {
  return (
      <div>
        <button  className="">
          <div
            id="46:26"
            style={{"marginLeft":2,"marginRight":2,"flexGrow":1,"height":16,"marginTop":0,"color":"rgba(21, 84, 246, 1)","fontSize":14,"fontWeight":500,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"121.90476417541504%","letterSpacing":"1px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">BUTTON</span>
            </div>
          </div>
        </button>
      </div>
    );
  }

