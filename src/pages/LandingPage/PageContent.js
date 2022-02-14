import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import TrackChanges from '@mui/icons-material/TrackChanges'
import FileCopy from '@mui/icons-material/FileCopy'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'

const PackageCard = ({ title, command, description, icons }) => {
  const [open, setOpen] = React.useState(false)
  const handleClick = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Card elevation={4} style={{ margin: 18, maxWidth: 350 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="h2">
          {title}
        </Typography>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#F3F4F4',
            padding: 8,
          }}
        >
          <Typography
            gutterBottom
            variant="body1"
            color="textSecondary"
            component="h2"
          >
            {command}
          </Typography>
          {/* <Tooltip */}
          <Tooltip
            title={
              <Button color="inherit" startIcon={<CheckCircleOutlineIcon />}>
                Copied to clipboard!
              </Button>
            }
            placement="bottom"
            open={open}
            leaveDelay={1000}
            onClose={handleClose}
          >
            <IconButton
              aria-label="Icon button"
              onClick={() => {
                if (window.clipboardData) {
                  // Internet Explorer
                  window.clipboardData.setData('Text', command)
                } else {
                  try {
                    navigator.clipboard.writeText(command)
                  } catch (error) {}
                }
                handleClick()
              }}
            >
              <FileCopy />
            </IconButton>
          </Tooltip>
        </div>
        <br />
        {icons}
        <br />
        <Typography variant="body2" component="div">
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}

const PageContent = ({ setComponents }) => {
  return (
    <React.Fragment>
      <div style={{ height: 20 }} />
      <Typography
        variant="h3"
        //color="textSecondary"
        style={{ margin: 16, textAlign: 'center' }}
      >
        A solution for every problem
      </Typography>
      <Typography
        variant="h5"
        component="div"
        color="textSecondary"
        style={{ margin: 16, textAlign: 'center' }}
      >
        Insist on creative solutions. From the some of the world industries from {/*Business, 
        Electronics, Finance and*/} Professional Educational Material to Information Technology Solutions offering only the best solutions to any
        problem a client may encounter.
      </Typography>
      <div style={{ height: 30 }} />

      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        {/* < PackageCard
          title={'Electronics'}
          command={'Heavy Duty Electronics to Light Duty Electronics'}
          description={
            '-House elecrtic fault finding, Home Appliance repairs'
          }
          icons={
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <img
                src="react.png"
                alt="react"
                style={{ width: 50, aspectRatio: 1.11 }}
              />
            </div>
          }
        /> */}
       {/*  <PackageCard
          title={'Financial Advisory'}
          command={'npx create-react-app my-app --template material-ui'}
          description={
            'Includes all features from the base shell expanded with Material-UI.'
          }
          icons={
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <img
                src="react.png"
                alt="react"
                style={{ width: 50, aspectRatio: 1.11 }}
              />
              <img src="material-ui.png" alt="react" style={{ width: 50 }} />
            </div>
          }
        /> */}
        {/* <PackageCard
          title={'Business Strategy'}
          command={'npx create-react-app my-app --template rmw'}
          description={'Base shell + Material UI shell + Firebase'}
          icons={
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <img
                src="react.png"
                alt="react"
                style={{ width: 50, aspectRatio: 1.11 }}
              />
              <img src="material-ui.png" alt="react" style={{ width: 50 }} />
              <img src="firebase.png" alt="react" style={{ width: 50 }} />
            </div>
          }
        /> */}
        <PackageCard
          title={'Educational Resources'}
          command={'npx create-react-app my-app --template rmw'}
          description={'Base shell + Material UI shell + Firebase'}
          icons={
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <img
                src="react.png"
                alt="react"
                style={{ width: 50, aspectRatio: 1.11 }}
              />
              <img src="material-ui.png" alt="react" style={{ width: 50 }} />
              <img src="firebase.png" alt="react" style={{ width: 50 }} />
            </div>
          }
        />
        <PackageCard
          title={'Information Technology'}
          command={'npx create-react-app my-app --template rmw'}
          description={'Base shell + Material UI shell + Firebase'}
          icons={
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <img
                src="react.png"
                alt="react"
                style={{ width: 50, aspectRatio: 1.11 }}
              />
              <img src="material-ui.png" alt="react" style={{ width: 50 }} />
              <img src="firebase.png" alt="react" style={{ width: 50 }} />
            </div>
          }
        />
      </div>
      <div style={{ height: 30 }} />
      <div
        ref={(r) => {
          if (r) {
            setComponents(r)
          }
        }}
        style={{
          //height: 400,
          backgroundColor: '#2D2D2D',
          backgroundImage: 'radial-gradient( #4F4F4F,#242424)',
        }}
      >
        <div style={{ height: 30 }} />
        <Typography
          variant="h3"
          //color="textSecondary"
          style={{ margin: 16, textAlign: 'center', color: 'white' }}
        >
          Not just a Solution
        </Typography>
        <Typography
          variant="h5"
          component="div"
          style={{ margin: 16, textAlign: 'center', color: 'grey' }}
        >
          But also not a Temporary Fix.
        </Typography>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <TrackChanges style={{ fontSize: 150, color: 'white' }} />
        </div>
        <Typography
          variant="h5"
          component="div"
          style={{ margin: 16, textAlign: 'center', color: 'grey' }}
        >
          You start easy like with every other client but you can also upgrade
          your membership over time. And with the upgrades you don't only
          upgrade your membership but also get a wide content range offering.
        </Typography>
        <div style={{ height: 50 }} />
      </div>

      <div style={{ height: 30 }} />
      <Typography
        variant="h3"
        //color="textSecondary"
        style={{ margin: 16, textAlign: 'center' }}
      >
        Only the best
      </Typography>
      <Typography
        variant="h5"
        component="div"
        color="textSecondary"
        style={{ margin: 16, textAlign: 'center' }}
      >
        Every membership package has it's own collection of very carefully picked packages and
        solutions. Only the creme de la creme of the Education-Inovative-Tech Solutions
      </Typography>
      <div style={{ height: 30 }} />
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        <img src="react.png" alt="react" style={{ width: 150 }} />
        <img src="material-ui.png" alt="react" style={{ width: 150 }} />
        <img src="firebase.png" alt="react" style={{ width: 150 }} />
      </div>
      <div style={{ height: 50 }} />
    </React.Fragment>
  )
}

export default PageContent
