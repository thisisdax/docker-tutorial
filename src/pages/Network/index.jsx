import React, { useState } from 'react';
import md5 from 'md5';
import shortid from 'shortid';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Clickable from '../../components/Clickable';
import ReactFlow from 'react-flow-renderer';

const description = {
  17: `
    docker0 is the name of the default bridge that Docker uses internally.
    Containers on the default bridge network can only access each other by IP addresses, 
    unless you use the --link option, which is considered legacy.
  `,
  '17-2': `
    nginx container that can be accessed by each assigned IP address within the docker0 network bridge. 
  `,
  '17-3': `
    nginx container that can be accessed by each assigned IP address within the docker0 network bridge. 
  `,
  '17-4': `
    nginx container that can be accessed by each assigned IP address within the docker0 network bridge. 
  `,
  '17-5': `
    nginx container that can be accessed by each assigned IP address within the docker0 network bridge. 
  `,
  18: `
    custom network bridge that can be used to separate containers from each other.
    To remove a user-defined network bridge, you must first remove all active endpoints connected to it.
    On a user-defined bridge network, containers can resolve each other by name or alias.
  `,
  '18-2': `
    On a user-defined bridge network, containers can resolve each other by name or alias. 
  `,
  '18-3': `
    On a user-defined bridge network, containers can resolve each other by name or alias. 
  `,
  '18-4': `
    On a user-defined bridge network, containers can resolve each other by name or alias. 
  `,
  '18-5': `
    On a user-defined bridge network, containers can resolve each other by name or alias. 
  `,
  host: `
    Notice how the container 559d341a4ed1(elegant_rubin) does not have a mapped port, when executing the command to spin a container
    using the host network you should also specify a port to publish on by using the --publish flag
  `,
  none: `
    If you want to completely disable the networking stack on a container, 
    you can use the --network none flag when starting the container. 
    Within the container, only the loopback device is created.
  `,
}

const bridge = {
  id: '17',
  type: 'output',
  data: { label:
    (
      <>
        type: bridge<br />
        name: docker0<br />
        172.17.0.1
      </>
    ),
  },
  position: { x: 240, y: 180 },
}

const bridgeContainer = [
  {
    id: '17-2',
    type: 'input',
    sourcePosition: 'right',
    data: { label:
      (
        <>
        Web Container<br />
        172.17.0.2
        </>
      ),
    },
    position: { x: 50, y: 30 },
  },
  {
    id: '17-3',
    type: 'input',
    sourcePosition: 'left',
    data: { label:
      (
        <>
        Web Container<br />
        172.17.0.3
        </>
      ),
    },
    position: { x: 430, y: 30 },
  },
  {
    id: '17-4',
    type: 'input',
    sourcePosition: 'right',
    data: { label:
      (
        <>
        Web Container<br />
        172.17.0.4
        </>
      ),
    },
    position: { x: 50, y: 100 },
  },
  {
    id: '17-5',
    type: 'input',
    sourcePosition: 'left',
    data: { label:
      (
        <>
        Web Container<br />
        172.17.0.5
        </>
      ),
    },
    position: { x: 430, y: 100 },
  },
]

const bridgeConnection = [
  { id: 'e2-17', source: '17-2', target: '17', type: 'smoothstep', animated: true },
  { id: 'e3-17', source: '17-3', target: '17', type: 'smoothstep', animated: true },
  { id: 'e4-17', source: '17-4', target: '17', type: 'smoothstep', animated: true },
  { id: 'e5-17', source: '17-5', target: '17', type: 'smoothstep', animated: true },
]

const custom = {
  id: '18',
  type: 'output',
  targetPosition: 'bottom',
  data: { label:
    (
      <>
      type: bridge<br />
      name: custom<br />
      172.18.0.1
      </>
    ),
  },
  position: { x: 240, y: 280 },
}

const userDefinedContainer = [
  {
    id: '18-2',
    type: 'input',
    sourcePosition: 'right',
    data: { label:
      (
        <>
        Web Container<br />
        172.18.0.2
        </>
      ),
    },
    position: { x: 50, y: 380 },
  },
  {
    id: '18-3',
    type: 'input',
    sourcePosition: 'left',
    data: { label:
      (
        <>
        Web Container<br />
        172.18.0.3
        </>
      ),
    },
    position: { x: 430, y: 380 },
  },
  {
    id: '18-4',
    type: 'input',
    sourcePosition: 'right',
    data: { label:
      (
        <>
        Web Container<br />
        172.18.0.4
        </>
      ),
    },
    position: { x: 50, y: 450 },
  },
  {
    id: '18-5',
    type: 'input',
    sourcePosition: 'left',
    data: { label:
      (
        <>
        Web Container<br />
        172.18.0.5
        </>
      ),
    },
    position: { x: 430, y: 450 },
  },
]

const userDefinedConnection = [
  { id: 'e2-18', source: '18-2', target: '18', type: 'smoothstep', animated: true },
  { id: 'e3-18', source: '18-3', target: '18', type: 'smoothstep', animated: true },
  { id: 'e4-18', source: '18-4', target: '18', type: 'smoothstep', animated: true },
  { id: 'e5-18', source: '18-5', target: '18', type: 'smoothstep', animated: true },
]

const hostNetworkContainer = {
  id: 'host',
  type: 'input',
  sourcePosition: 'left',
  data: { label:
    (
      <>
      Web Container<br />
      host
      </>
    ),
  },
  position: { x: 0, y: 240 },
}

const noneNetworkContainer = {
  id: 'none',
  type: 'special',
  data: { label:
    (
      <>
      Web Container<br />
      none
      </>
    ),
  },
  position: { x: 440, y: 240 },
  style: {
    width: 150,
    border: '1px solid #777',
    padding: 10,
    borderRadius: '3px',
    fontSize: 12,
    color: '#222',
    textAlign: 'center',
  },
}

const nodeTypes = {
  special: (data) => (
    <>
      Web Container<br />
      none
    </>
  )
};

const useStyles = makeStyles((theme) => ({
  paper: {
    textAlign: 'center',
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  tab: {
    backgroundColor: 'grey',
    paddingRight: '10px',
    paddingLeft: '10px',
    paddingTop: '1px',
    paddingBottom: '1px',
    color: 'white',
    font: '1rem Inconsolata, monospace',
  },
  console: {
    padding: '1rem',
    backgroundColor: '#2D2D2D',
    color: 'white',
    font: '0.85rem Inconsolata, monospace',
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  marginBottom: {
    marginBottom: theme.spacing(2),
  }
}));


function Diagram(props) {
  return (
    <div style={{ height: 550 }}>
      <ReactFlow
        elements={props.elements}
        onNodeMouseEnter={props.onMouseEnter}
        onElementClick = {props.onElementClick}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        panOnScroll={false}
        zoomOnDoubleClick={false}
        selectNodesOnDrag={false}
        paneMoveable={false}
        nodeTypes={nodeTypes}
      />
    </div>
  );
};

function Host(props) {
  const classes = useStyles();
  const { elements, onMouseEnter, onElementClick } = props;
  return (
    <Paper className={classes.paper}>
      <Box>
        <Typography variant="subtitle1">Host</Typography>
        <Divider className={classes.divider} />
        <Diagram
          elements={elements}
          onMouseEnter={onMouseEnter}
          onElementClick={onElementClick}
        />
      </Box>
    </Paper>
  );
}

function Description(props) {
  return (
    <>
      <Typography variant="body1">{description[props.id]}</Typography>
    </>
  )
}

function CommandLine(props) {
  const classes = useStyles();
  const { command, network, defaultContainer, customContainer, isHidden, hostNetwork, noneNetwork } = props;
  const random_id = ["8bdca105cc91", "3286ae1fc444", "fa2dde46ca29", "6c849e5cc92b", "b4be2ed72463", "dec78b250458", "8be7eb4cd4b8", "0fda712679ab", "559d341a4ed1", "d904e08a3ac2"];
  const random_name = ["wonderful_gates", "blissful_swartz", "awesome_cartwright", "vigorous_torvalds", "distracted_gould", "interesting_sammet", "modest_driscoll", "laughing_benz", "elegant_rubin", "gallant_turing"]
  return (
    <Box className={classes.marginBottom}>
      <Clickable
        id="image-docker-run-cmd"
        component="span"
        className={classes.tab}
      >
        { command }
      </Clickable>
      <Box className={classes.console}>
        <Clickable id="image-unable-to-find-image">
          >> docker ps
        </Clickable>
        <Grid container justifyContent="flex-start" spacing={4}>
          <Grid item>
            <Box>CONTAINER ID</Box>
            {Object.values(defaultContainer).map((v, i) => (
              <Box>
                {random_id[i]}
              </Box>
            ))}
            {Object.values(customContainer).map((v, i) => (
              <Box>
                {random_id[i+4]}
              </Box>
            ))}
            {hostNetwork.length > 0 ?
              <Box>
                {random_id[8]}
              </Box> : null
            }
            {noneNetwork.length > 0 ?
              <Box>
                {random_id[9]}
              </Box> : null
            }
          </Grid>
          <Grid item>
            <Box>IMAGE</Box>
            {Object.values(defaultContainer).map(() => (
              <Box>nginx</Box>
            ))}
            {Object.values(customContainer).map(() => (
              <Box>nginx</Box>
            ))}
            {hostNetwork.length > 0 ?
              <Box>nginx</Box> : null
            }
            {noneNetwork.length > 0 ?
              <Box>nginx</Box> : null
            }
          </Grid>
          <Grid item>
            <Box>COMMAND</Box>
            {Object.values(defaultContainer).map(() => (
              <Box>"/docker-entrypoint.…"</Box>
            ))}
            {Object.values(customContainer).map(() => (
              <Box>"/docker-entrypoint.…"</Box>
            ))}
            {hostNetwork.length > 0 ?
              <Box>"/docker-entrypoint.…"</Box> : null
            }
            {noneNetwork.length > 0 ?
              <Box>"/docker-entrypoint.…"</Box> : null
            }
          </Grid>
          <Grid item>
            <Box>CREATED</Box>
            {Object.values(defaultContainer).map(() => (
              <Box>About a minute ago</Box>
            ))}
            {Object.values(customContainer).map(() => (
              <Box>About a minute ago</Box>
            ))}
            {hostNetwork.length > 0 ?
              <Box>About a minute ago</Box> : null
            }
            {noneNetwork.length > 0 ?
              <Box>About a minute ago</Box> : null
            }
          </Grid>
          <Grid item>
            <Box>STATUS</Box>
            {Object.values(defaultContainer).map(() => (
              <Box>Up About a minute ago</Box>
            ))}
            {Object.values(customContainer).map(() => (
              <Box>Up About a minute ago</Box>
            ))}
            {hostNetwork.length > 0 ?
              <Box>Up About a minute ago</Box> : null
            }
            {noneNetwork.length > 0 ?
              <Box>Up About a minute ago</Box> : null
            }
          </Grid>
          <Grid item>
            <Box>PORTS</Box>
            {Object.values(defaultContainer).map((v, i) => (
              <Box>{isHidden[i] ? <br/> : '80/tcp'}</Box>
            ))}
            {Object.values(customContainer).map((v, i) => (
              <Box>{isHidden[i+4] ? <br/> : '80/tcp'}</Box>
            ))}
            {hostNetwork.length > 0 ?
              <Box><br/></Box> : null
            }
            {noneNetwork.length > 0 ?
              <Box><br/></Box> : null
            }
          </Grid>
          <Grid item>
            <Box>NAMES</Box>
            {Object.values(defaultContainer).map((v, i) => (
              <Box>
                {random_name[i]}
              </Box>
            ))}
            {Object.values(customContainer).map((v, i) => (
              <Box>
                {random_name[i+4]}
              </Box>
            ))}
            {hostNetwork.length > 0 ?
              <Box>{random_name[8]}</Box> : null
            }
            {noneNetwork.length > 0 ?
              <Box>{random_name[9]}</Box> : null
            }
          </Grid>
        </Grid>
        <Clickable id="image-unable-to-find-image">
          <br/>
        </Clickable>
        <Clickable id="image-unable-to-find-image">
          >> docker network ls
        </Clickable>
        <Grid container justifyContent="flex-start" spacing={4}>
          <Grid item>
            <Box>NETWORK ID</Box>
            <Box>bcf48aecfac2</Box>
            { network.length > 1 ? <Box>c220ac46e3eb</Box> : null }
            <Box>4810472a087d</Box>
            <Box>1cc37ded9c79</Box>
          </Grid>
          <Grid item>
            <Box>NAME</Box>
            <Box>bridge</Box>
            { network.length > 1 ? <Box>custom</Box> : null }
            <Box>host</Box>
            <Box>none</Box>
          </Grid>
          <Grid item>
            <Box>DRIVER</Box>
            <Box>bridge</Box>
            { network.length > 1 ? <Box>bridge</Box> : null }
            <Box>host</Box>
            <Box>null</Box>
          </Grid>
          <Grid item>
            <Box>SCOPE</Box>
            <Box>local</Box>
            { network.length > 1 ? <Box>local</Box> : null }
            <Box>local</Box>
            <Box>local</Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default function Network() {
  const classes = useStyles();
  const [ network, setNetwork ] = useState([bridge]);
  const [ defaultContainer, setDefaultContainer ] = useState({});
  const [ defaultConnection, setDefaultConnection ] = useState({});
  const [ defaultContainerCount, setDefaultContainerCount ] = useState(0);
  const [ customContainer, setCustomContainer ] = useState({});
  const [ customConnection, setCustomConnection ] = useState({});
  const [ customContainerCount, setCustomContainerCount ] = useState(0);
  const [ isHidden, setIsHidden ] = useState({});
  const [ hostNetwork, setHostNetwork ] = useState([]);
  const [ noneNetwork, setNoneNetwork ] = useState([]);
  const [ command, setCommand ] = useState('>>');
  const [ id, setId ] = useState('');

  const onMouseEnter = (event, element) => {
    setId(element.id);
  }

  const onElementClick = (event, element) => {
    if (network.length < 2) {
      return;
    }
    switch(element.id) {
      case '17-2':
        setIsHidden({...isHidden, 0: !defaultConnection[element.id.split("-")[1]-2].isHidden});
        break;
      case '17-3':
        setIsHidden({...isHidden, 1: !defaultConnection[element.id.split("-")[1]-2].isHidden});
        break;
      case '17-4':
        setIsHidden({...isHidden, 2: !defaultConnection[element.id.split("-")[1]-2].isHidden});
        break;
      case '17-5':
        setIsHidden({...isHidden, 3: !defaultConnection[element.id.split("-")[1]-2].isHidden});
        break;
      case '18-2':
        setIsHidden({...isHidden, 4: !customConnection[element.id.split("-")[1]-2].isHidden});
        break;
      case '18-3':
        setIsHidden({...isHidden, 5: !customConnection[element.id.split("-")[1]-2].isHidden});
        break;
      case '18-4':
        setIsHidden({...isHidden, 6: !customConnection[element.id.split("-")[1]-2].isHidden});
        break;
      case '18-5':
        setIsHidden({...isHidden, 7: !customConnection[element.id.split("-")[1]-2].isHidden});
        break;
      default:
        break;
    }

    if (element.id === "17-2"
      || element.id === "17-3"
      || element.id === "17-4"
      || element.id === "17-5"
    ) {
      setDefaultConnection({
        ...defaultConnection,
        [element.id.split("-")[1]-2]: {
          ...defaultConnection[element.id.split("-")[1]-2],
          isHidden: !defaultConnection[element.id.split("-")[1]-2].isHidden,
        },
      });
    }
    if (element.id === "18-2"
      || element.id === "18-3"
      || element.id === "18-4"
      || element.id === "18-5"
    ) {
      setCustomConnection({
        ...customConnection,
        [element.id.split("-")[1]-2]: {
          ...customConnection[element.id.split("-")[1]-2],
          isHidden: !customConnection[element.id.split("-")[1]-2].isHidden,
        },
      });
    }
  }

  const checkConnection = (connection) => {
    let activeConnections = false;
    for (const item in connection) {
      if (!connection[item].isHidden) {
        activeConnections = true;
      }
    }
    return activeConnections;
  }

  return (
    <Box>
      <Typography variant="h1" noWrap>
        Docker Networks
      </Typography>
      <br/>
      <Typography variant="body1">
        Docker Networks are used to provide complete isolation for Docker Containers.
      </Typography>
      <br/>
      <Divider className={classes.divider} />
      <Box>
        <Grid
          container
          className={classes.root}
          justifyContent="center"
          spacing={2}
        >
          <Grid item xs={6}>
            <Host
              onMouseEnter={onMouseEnter}
              onElementClick={onElementClick}
              elements={
                [
                  ...network,
                  ...hostNetwork,
                  ...noneNetwork,
                  ...Object.values(defaultContainer),
                  ...Object.values(defaultConnection),
                  ...Object.values(customContainer),
                  ...Object.values(customConnection),
                ]
              }
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Run a container on default network bridge</Typography>
            <Button
              disabled={defaultContainerCount > 3}
              onClick={() => {
                setCommand('>> docker run --rm -detach nginx')
                setDefaultContainer({...defaultContainer, [defaultContainerCount]: bridgeContainer[defaultContainerCount]})
                setDefaultConnection({...defaultConnection, [defaultContainerCount]: bridgeConnection[defaultContainerCount]})
                setDefaultContainerCount(defaultContainerCount+1)
              }}
            >
              >> docker run --rm -detach nginx
            </Button>
            { network.length < 2 ? (
              <>
                <Typography variant="subtitle1">Create user-defined network bridge</Typography>
                <Button
                  onClick={() => {
                    setCommand('>> docker network create --driver bridge custom')
                    setNetwork([bridge, custom])
                  }}
                >>> docker network create --driver bridge custom</Button>
              </>
            ) : (
              <>
                <Typography variant="subtitle1">Remove user-defined network bridge</Typography>
                <Button
                  disabled={checkConnection(customConnection)}
                  onClick={() => {
                    setCommand('>> docker network rm custom')
                    setNetwork([bridge])
                  }}>>> docker network rm custom</Button>
              </>
            )}
            <Typography>Run a container on custom network bridge</Typography>
            <Button
              disabled={customContainerCount > 3 || network.length < 2}
              onClick={() => {
                setCommand('>> docker run --rm --detach --network=custom nginx')
                setCustomContainer({...customContainer, [customContainerCount]: userDefinedContainer[customContainerCount]})
                setCustomConnection({...customConnection, [customContainerCount]: userDefinedConnection[customContainerCount]})
                setCustomContainerCount(customContainerCount+1)
              }}
            >
              >> docker run --rm --detach --network=custom nginx
            </Button>
            { !hostNetwork.length ?
              (
                <>
                  <Typography variant="subtitle1">Run a container on host network driver</Typography>
                  <Button
                    disabled={hostNetwork.length}
                    onClick={() => {
                    setCommand('>> docker run --rm -detach --network=host nginx')
                    setHostNetwork([hostNetworkContainer])
                  }}
                  >
                    >> docker run --rm -detach --network=host nginx
                  </Button>
                </>
              ) : (
                <>
                  <Typography variant="subtitle1">Remove container using host network driver</Typography>
                  <Button
                    onClick={() => {
                      setCommand('>> docker container stop 559d341a4ed1')
                      setHostNetwork([])
                    }}
                  >
                    >> docker container stop 559d341a4ed1
                  </Button>
                </>
              )
            }
            { !noneNetwork.length ?
              (
                <>
                <Typography variant="subtitle1">Run a container on none network driver</Typography>
                <Button
                  disabled={noneNetwork.length}
                  onClick={() => {
                    setCommand('>> docker run --rm -detach --network=none nginx')
                    setNoneNetwork([noneNetworkContainer])
                  }}
                >
                  >> docker run --rm -detach --network=none nginx
                </Button>
                </>
              ) : (
                <>
                <Typography variant="subtitle1">Remove container using none network driver</Typography>
                <Button
                  onClick={() => {
                    setCommand('>> docker container stop d904e08a3ac2')
                    setNoneNetwork([])
                  }}
                >
                  >> docker container stop 559d341a4ed1
                </Button>
                </>
              )
            }
            <br />
            <Description id={id}/>
          </Grid>
        </Grid>
        <br />
        <CommandLine
          command={command}
          network={network}
          defaultContainer={defaultContainer}
          customContainer={customContainer}
          isHidden={isHidden}
          hostNetwork={hostNetwork}
          noneNetwork={noneNetwork}
        />
      </Box>
    </Box>
  );
}