import Svg, {Path} from 'react-native-svg';
import {GeneralIconsParams} from '../../models/iconsModels';

function PortfolioIcon(props: GeneralIconsParams) {
  return (
    <Svg viewBox="0 -0.5 25 25" width={props.size} height={props.size}>
      <Path
        d="M13.25 5.00019C13.25 4.58597 12.9142 4.25019 12.5 4.25019C12.0858 4.25019 11.75 4.58597 11.75 5.00019H13.25ZM12.5 12.0002H11.75C11.75 12.4144 12.0858 12.7502 12.5 12.7502V12.0002ZM19.5 12.7502C19.9142 12.7502 20.25 12.4144 20.25 12.0002C20.25 11.586 19.9142 11.2502 19.5 11.2502V12.7502ZM5.5 12.0002L4.75 12.0001L5.5 12.0002ZM11.1348 5.1351L11.2811 5.8707L11.1348 5.1351ZM18.9673 9.32231L19.6602 9.03534V9.03534L18.9673 9.32231ZM16.3887 17.8212L16.8053 18.4448L16.3887 17.8212ZM7.55 16.9502L8.08036 16.4199H8.08036L7.55 16.9502ZM11.75 5.00019V12.0002H13.25V5.00019H11.75ZM12.5 12.7502H19.5V11.2502H12.5V12.7502ZM6.25 12.0002C6.25022 9.01854 8.35665 6.45221 11.2811 5.8707L10.9886 4.39951C7.36224 5.12057 4.75027 8.30282 4.75 12.0001L6.25 12.0002ZM11.2811 5.8707C14.2055 5.2892 17.1335 6.85447 18.2744 9.60928L19.6602 9.03534C18.2456 5.61938 14.6149 3.67844 10.9886 4.39951L11.2811 5.8707ZM18.2744 9.60928C19.4153 12.3641 18.4513 15.5412 15.972 17.1976L16.8053 18.4448C19.8796 16.3909 21.0749 12.4513 19.6602 9.03534L18.2744 9.60928ZM15.972 17.1976C13.4927 18.854 10.1886 18.5284 8.08036 16.4199L7.01964 17.4805C9.6339 20.095 13.731 20.4988 16.8053 18.4448L15.972 17.1976ZM8.08036 16.4199C6.90828 15.2477 6.24988 13.6579 6.25 12.0002L4.75 12.0001C4.74985 14.0556 5.56627 16.027 7.01964 17.4805L8.08036 16.4199Z"
        fill="#000000"
        stroke={props.color}
      />
    </Svg>
  );
}

export default PortfolioIcon;
