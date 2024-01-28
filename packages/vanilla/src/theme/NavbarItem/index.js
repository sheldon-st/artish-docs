import React from 'react';
import NavbarItem from '@theme-original/NavbarItem';
import { useLocation } from '@docusaurus/router';

export default function NavbarItemWrapper(props) {
  const { docsPluginId, className, type } = props;
  const { pathname } = useLocation();

  const doesPathnameContainDocsPluginId = pathname.includes(docsPluginId);

  if (!doesPathnameContainDocsPluginId) {
    return null;
  }
  return (
    <>
      <NavbarItem {...props} />
    </>
  );
}
