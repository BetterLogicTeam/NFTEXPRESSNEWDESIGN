import React from "react";
import styled from "styled-components";
const HoverTreeNode = () => {
  const HoverNode = styled.div`
    display: none;
    position: absolute;
    width: 400px;
    border-radius: 5px;
    padding: 10px;
    background: rgba(19, 0, 71);
    margin-left: -270px;
    z-index: 1;
    margin-top: 5px;
  `;
  return (
    <>
      <HoverNode className="HoverNodeItemMain">
        <div className="HoverNodeChiled">
          <div className="HoverNodeHeadedr">
            <h6>Sponsor :</h6>
          </div>
          <div className="HoverNodeItem">
            <div className="HoverNodeRight">
              <h5>
                Registration Date : <span>0</span>
              </h5>
              <h5>
                Package : <span>0</span>
              </h5>
              <h5>
                Total Left : <span>0</span>
              </h5>
              <h5>
                Total Left Active : <span>0</span>
              </h5>
              <h5>
                Total Left Business : <span>0</span>
              </h5>
              <h5>
                Today Left Business : <span>0</span>
              </h5>
              <h5>
                Left Carry Forward : <span>0</span>
              </h5>
              <h5>
                Rank : <span>0</span>
              </h5>
              {/* <h5>
                 Rank : <span>0</span>
              </h5> */}
            </div>
            <div className="HoverNodeLeft">
              <h5>
                Activation Date : <span>0</span>
              </h5>
              <h5>
                Package amount: <span>0</span>
              </h5>
              <h5>
                Total Right : <span>0</span>
              </h5>
              <h5>
                Total Right Active: <span>0</span>
              </h5>
              <h5>
                Total Right Business: <span>0</span>
              </h5>
              <h5>
                Today Right Business: <span>0</span>
              </h5>

              <h5>
                Right Carry Forward : <span>0</span>
              </h5>
              <h5>
                Country : <span>0</span>
              </h5>
              {/* <h5>
                Rank : <span>0</span>
              </h5> */}
            </div>
          </div>
        </div>
      </HoverNode>
    </>
  );
};

export default HoverTreeNode;
