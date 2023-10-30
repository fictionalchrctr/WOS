// import React from 'react'
import { gql, useQuery } from '@apollo/client'

const GET_DATA = gql`
  query allShips {
    vehicles {
      title
      description
      icons {
        large
        medium
      }
      level
      type {
        name
        title
        icons {
          default
        }
      }
      nation {
        name
        title
        color
        icons {
          small
          medium
          large
        }
      }
    }
  }
`

interface IVehicle {
  title: string
  description: string
  icons: {
    large: string
    medium: string
  }
  level: number
  type: {
    icons: {
      default: string
    }
    name: string
    title: string
  }
  nation: {
    color: string
    icons: {
      large: string
      medium: string
      small: string
    }
    name: string
    title: string
  }
}

interface IVehiclesData extends IVehicle {
  key: React.Key
  image: string
  country: string
  class: string
}

const ApiRequest = () => {
  const { loading, error, data } = useQuery(GET_DATA)
  console.log(data)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  return (
    <div>
      {data.vehicles.map((vehicle: IVehicle) => (
        <div key={vehicle.title}>
          <h3>{vehicle.title}</h3>
          <img src={vehicle.icons.medium} alt={vehicle.title} />
          <p>level: {vehicle.level}</p>
          <p>nation: {vehicle.nation.title}</p>
          {/* {vehicle.nation.color} */}
          <img src={vehicle.nation.icons.small} alt={vehicle.nation.title} />
          <p>type: {vehicle.type.title}</p>
          <img src={vehicle.type.icons.default} alt={vehicle.type.name} />
          <p>{vehicle.description}</p>
        </div>
      ))}
    </div>
  )
}

export default ApiRequest
