import { useEffect, useRef } from 'react';

function useDynamicTitle(title) {
  const defaultTitle = useRef(title);

  useEffect(() => {
    document.title = title;
  }, [title]);
}

export default useDynamicTitle