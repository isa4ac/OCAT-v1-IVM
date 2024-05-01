const styles = {
  global: {
    "table": {
      border: `1px solid #424242`,
    },
    "tr": {
      display: `flex`,
      width: `fit-content`,
    },
    // eslint-disable-next-line sort-keys
    ".th, .td": { boxShadow: `inset 0 0 0 1px #424242` },
    // eslint-disable-next-line sort-keys
    ".th": {
      position: `relative`,
      // eslint-disable-next-line sort-keys
      display: `flex`,
      justifyContent: `center`,
      // eslint-disable-next-line sort-keys
      alignItems: `center`,
      color: `gray.400`,
      padding: `0.5rem`,
      // eslint-disable-next-line sort-keys
      fontWeight: `bold`,
      // eslint-disable-next-line sort-keys
      fontSize: `xs`,
      textTransform: `uppercase`,
      // eslint-disable-next-line sort-keys
      textAlign: `center`,
    },
  },
};

export default styles;
