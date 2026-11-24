import type { StatusMessageProps } from '../types'

function StatusMessage({ type, message }: StatusMessageProps) {
  return (
    <div
      className={`status-message status-message--${type}`}
      role={type === 'error' ? 'alert' : 'status'}
      aria-live="polite"
    >
      {type === 'loading' && <span className="status-message__loader" aria-hidden="true" />}
      <span>{message}</span>
    </div>
  )
}

export default StatusMessage
