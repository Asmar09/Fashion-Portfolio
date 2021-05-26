

const containerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%",
};


export const container = {
    ...containerFluid,
    "@media (min-width: 576px)": {
      maxWidth: "540px",
    },
    "@media (min-width: 768px)": {
      maxWidth: "720px",
    },
    "@media (min-width: 992px)": {
      maxWidth: "960px",
    },
    "@media (min-width: 1200px)": {
      maxWidth: "1140px",
    },
  };

  
 export  const title = {
    color: "#3C4858",
    margin: "1.75rem 0 0.875rem",
    textDecoration: "none",
    fontWeight: "700",
    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
  };
  

  export const primaryColor = "#668cff";
  export const warningColor = "#ff9800";
  export const dangerColor = "#f44336";
  export const successColor = "#4caf50";
  export const infoColor = "#00acc1";
  export const roseColor = "#e91e63";
  export const grayColor = "#999999";