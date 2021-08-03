import React, { useMemo } from 'react';
import Box from '@material-ui/core/Box';
import Hypervisor from '../Home/components/Hypervisor';
import DockerEngine from '../Home/components/DockerEngine';
import HostOS from '../Home/components/HostOS';
import LayeredArchitecture from '../Image/components/LayeredArchitecture';
import Dockerfile from '../Image/components/Dockerfile';
import DockerBuild from '../Image/components/DockerBuild';

const renderDetail = (id) => {
  let detail = null;

  switch(id) {
    case 'home-docker-container':
      detail = (
        <Box>
          Unable to find image
        </Box>
      )
      break;
    case 'home-docker-engine':
      detail = <DockerEngine />;
      break;
    case 'home-hypervisor':
      detail = <Hypervisor />;
      break;
    case 'home-host-os':
      detail = <HostOS />
      break;
    case 'image-dockerfile':
      detail = <Dockerfile />
      break;
    case 'image-docker-build':
      detail = <DockerBuild />
      break;
    default:
      detail = <Box>No information regarding {id}</Box>
      break;
  }

  return detail;
}

export default function Details(props) {
  const id = props.id
  const render = useMemo(() => renderDetail(id), [id]);

  return (
    <Box>
      {render}
    </Box>
  );
}