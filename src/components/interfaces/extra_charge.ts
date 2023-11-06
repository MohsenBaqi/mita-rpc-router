import { ExtraChargeAddExtraChargeProfile } from './content/extra_charge/extra_charge.addExtraChargeProfile-1'
import { ExtraChargeDeleteExtraChargeProfile } from './content/extra_charge/extra_charge.deleteExtraChargeProfile-3'
import { ExtraChargeGetExtraChargeProfileByID } from './content/extra_charge/extra_charge.getExtraChargeProfileByID-6'
import { ExtraChargeGetExtraChargeProfileByName } from './content/extra_charge/extra_charge.getExtraChargeProfileByName-5'
import { ExtraChargeGetExtraChargeProfileNames } from './content/extra_charge/extra_charge.getExtraChargeProfileNames-0'
import { ExtraChargeGetExtraChargeProfiles } from './content/extra_charge/extra_charge.getExtraChargeProfiles-4'
import { ExtraChargeUpdateExtraChargeProfile } from './content/extra_charge/extra_charge.updateExtraChargeProfile-2'

type extra_charge =
  | ExtraChargeAddExtraChargeProfile
  | ExtraChargeDeleteExtraChargeProfile
  | ExtraChargeGetExtraChargeProfileByID
  | ExtraChargeGetExtraChargeProfileByName
  | ExtraChargeGetExtraChargeProfileNames
  | ExtraChargeGetExtraChargeProfiles
  | ExtraChargeUpdateExtraChargeProfile

export default extra_charge
