import { locationsReducer }  from './locationsReducer'
import { addLocations } from '../Actions/index'

describe('locationsReducer', () => {
  it('should return the initial state', () => {
    const expected = []
    const result = locationsReducer(undefined, [])
    expect(result).toEqual(expected)
  })

  it('should return the updated state', () => {
    const locations = ['Chattanooga','Murfreesboro']
    const result = locationsReducer(locations, addLocations(locations))
    expect(result).toEqual(locations)
  })
})