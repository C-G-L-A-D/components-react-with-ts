import React, { PureComponent, ComponentType } from 'react'
import axios from 'axios'

interface ILoaderState {
  data: any
  isLoading: boolean
}
interface ILoaderProps {
  data: any
}

const withLoader = <P extends ILoaderState>(WrappedComponent: ComponentType<P>, url: string) => {
  return class LoaderComponent extends PureComponent<Partial<ILoaderProps>, ILoaderState> {
    constructor(props: any) {
      super(props)
      this.state = {
        data: null,
        isLoading: false
      }
    }

    componentDidMount() {
      this.setState({
        isLoading: true
      })
      axios.get(url).then(res => {
        this.setState({
          data: res?.data || {},
          isLoading: false
        })
      })
    }

    render(): React.ReactNode {
      const { data, isLoading } = this.state
      return (
        <>
          {isLoading || !data ? (
            <p>data is loading</p>
          ) : (
            <WrappedComponent {...(this.props as P)} data={data} />
          )}
        </>
      )
    }
  }
}

export default withLoader
