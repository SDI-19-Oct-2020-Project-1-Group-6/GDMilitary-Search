import React from 'react';



function Units(props) {
    
    return  (
        <div className="ui three column stackable grid">
        <div className="column">
          <div className="ui raised segment">
            <div className="ui">
              <div className="image header">
                <div className="line">Unit Name</div>
                <div className="line">{props.unit.name}</div>
              </div>
              <div className="paragraph">
                <div className="medium line"></div>
                <div className="short line"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="ui raised segment">
            <div className="">
              <div className="image header">
                <div className="line">Unit Location</div>
                <div className="line">{props.unit.location}</div>
              </div>
              <div className="paragraph">
                <div className="medium line"></div>
                <div className="short line"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="ui raised segment">
            <div className="ui">
              <div className="image header">
                <div className="line">Size</div>
    <div className="line">{props.unit.size} people</div>
              </div>
              <div className="paragraph">
                <div className="medium line"></div>
                <div className="short line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    );

  }

        
        
    


export default Units;