import React from "react";
import { Image } from "react-bootstrap";
import rootHourse from "../../assets/images/rootHourse.png";
import { Tree, TreeNode } from "react-organizational-chart";
import styled from "styled-components";
import HoverTreeNode from "./HoverTreeNode";

const MintMainImage = () => {
  const StyledNode = styled.div`
    padding: 5px;
    display: inline-block;
    position: relative;
    &:hover .HoverNodeItemMain {
      display: block;
    }
  `;

  return (
    <>
      <div className="TreeImgMian">
        <Tree
          lineWidth={"2px"}
          lineColor={"#5350EF"}
          lineBorderRadius={"10px"}
          label={
            <StyledNode>
              <Image    style={{zoom:'138%'}}    src={rootHourse} alt="Image description" fluid={true}  />
              <HoverTreeNode />
            </StyledNode>
          }
        >
          <TreeNode
            label={
              <StyledNode>
                <Image
                  src={rootHourse}
                  alt="Image description"
                  fluid={true}
                  className="TreeNodeImage"
                />
                <HoverTreeNode />
              </StyledNode>
            }
          >
            <TreeNode
              label={
                <StyledNode>
                  <Image
                    src={rootHourse}
                    alt="Image description"
                    fluid={true}
                    className="TreeNodeImage"
                  />
                  <HoverTreeNode />
                </StyledNode>
              }
            >
              <TreeNode
                label={
                  <StyledNode>
                    <Image
                      src={rootHourse}
                      alt="Image description"
                      fluid={true}
                      className="TreeNodeImage"
                    />
                    <HoverTreeNode />
                  </StyledNode>
                }
              />
              <TreeNode
                label={
                  <StyledNode>
                    <Image
                      src={rootHourse}
                      alt="Image description"
                      fluid={true}
                      className="TreeNodeImage"
                    />
                    <HoverTreeNode />
                  </StyledNode>
                }
              />
            </TreeNode>
            <TreeNode
              label={
                <StyledNode>
                  <Image
                    src={rootHourse}
                    alt="Image description"
                    fluid={true}
                    className="TreeNodeImage"
                  />
                  <HoverTreeNode />
                </StyledNode>
              }
            >
              <TreeNode
                label={
                  <StyledNode>
                    <Image
                      src={rootHourse}
                      alt="Image description"
                      fluid={true}
                      className="TreeNodeImage"
                    />
                    <HoverTreeNode />
                  </StyledNode>
                }
              />
              <TreeNode
                label={
                  <StyledNode>
                    <Image
                      src={rootHourse}
                      alt="Image description"
                      fluid={true}
                      className="TreeNodeImage"
                    />
                    <HoverTreeNode />
                  </StyledNode>
                }
              />
            </TreeNode>
          </TreeNode>

          <TreeNode
            label={
              <StyledNode>
                <Image
                  src={rootHourse}
                  alt="Image description"
                  fluid={true}
                  className="TreeNodeImage"
                />
                <HoverTreeNode />
              </StyledNode>
            }
          >
            <TreeNode
              label={
                <StyledNode>
                  <Image
                    src={rootHourse}
                    alt="Image description"
                    fluid={true}
                    className="TreeNodeImage"
                  />
                  <HoverTreeNode />
                </StyledNode>
              }
            >
              <TreeNode
                label={
                  <StyledNode>
                    <Image
                      src={rootHourse}
                      alt="Image description"
                      fluid={true}
                      className="TreeNodeImage"
                    />
                    <HoverTreeNode />
                  </StyledNode>
                }
              />
              <TreeNode
                label={
                  <StyledNode>
                    <Image
                      src={rootHourse}
                      alt="Image description"
                      fluid={true}
                      className="TreeNodeImage"
                    />
                    <HoverTreeNode />
                  </StyledNode>
                }
              />
            </TreeNode>
            <TreeNode
              label={
                <StyledNode>
                  <Image
                    src={rootHourse}
                    alt="Image description"
                    fluid={true}
                    className="TreeNodeImage"
                  />
                  <HoverTreeNode />
                </StyledNode>
              }
            >
              <TreeNode
                label={
                  <StyledNode>
                    <Image
                      src={rootHourse}
                      alt="Image description"
                      fluid={true}
                      className="TreeNodeImage"
                    />
                    <HoverTreeNode />
                  </StyledNode>
                }
              />
              <TreeNode
                label={
                  <StyledNode>
                    <Image
                      src={rootHourse}
                      alt="Image description"
                      fluid={true}
                      className="TreeNodeImage"
                    />
                    <HoverTreeNode />
                  </StyledNode>
                }
              />
            </TreeNode>
          </TreeNode>
        </Tree>
      </div>
    </>
  );
};

export default MintMainImage;
