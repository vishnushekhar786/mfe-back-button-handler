# mfe-back-button-handler

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/mfe-back-button-handler.svg)](https://www.npmjs.com/package/mfe-back-button-handler) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save mfe-back-button-handler
```

## Usage



// MFE1 - src/index.js
}
```import React, { useEffect } from 'react';
import backButtonHandler from 'mfe-back-button-handler';

const MFE1 = () => {
  useEffect(() => {
    const handleBackButton = (location) => {
      console.log('Back button pressed in MFE1', location);
      // Handle navigation or state update
    };

    backButtonHandler.onBackButton(handleBackButton);

    return () => {
      backButtonHandler.offBackButton(handleBackButton);
    };
  }, []);

  return <div>Microfrontend 1 Content</div>;
};

export default MFE1;
}
```

// MFE2 - src/index.js
}
```import React from 'react';
import backButtonHandler from 'mfe-back-button-handler';

const MFE2 = () => {
  const handleNavigation = () => {
    backButtonHandler.navigate('/mfe1');
  };

  return (
    <div>
      <h2>Microfrontend 2 Content</h2>
      <button onClick={handleNavigation}>Go to MFE1</button>
    </div>
  );
};

export default MFE2;
}
```







## License

MIT © [vishnu shekhar](https://github.com/vishnu shekhar)
