import { VoipProviderListRoutingProfiles } from "./content/voip_provider/voip_provider.listRoutingProfiles-0";
import { VoipProviderListVoIPProviders } from "./content/voip_provider/voip_provider.listVoIPProviders-1";

type voip_provider =
  | VoipProviderListRoutingProfiles
  | VoipProviderListVoIPProviders;

export default voip_provider;
