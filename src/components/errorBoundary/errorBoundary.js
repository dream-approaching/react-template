import React from 'react';

class ErrorBoundary extends React.Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    console.log('error.componentStack:', error.componentStack);
    return { error };
  }

  render() {
    const { error } = this.state;
    console.log('errorBoundary render');
    if (error) {
      return (
        <div>
          <h3>程序异常</h3>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
