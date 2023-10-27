import { ExtraChargeAddExtraChargeProfile } from './extra_charge.addExtraChargeProfile-1'
import { ExtraChargeDeleteExtraChargeProfile } from './extra_charge.deleteExtraChargeProfile-3'
import { ExtraChargeGetExtraChargeProfileByID } from './extra_charge.getExtraChargeProfileByID-6'
import { ExtraChargeGetExtraChargeProfileByName } from './extra_charge.getExtraChargeProfileByName-5'
import { ExtraChargeGetExtraChargeProfileNames } from './extra_charge.getExtraChargeProfileNames-0'
import { ExtraChargeGetExtraChargeProfiles } from './extra_charge.getExtraChargeProfiles-4'
import { ExtraChargeUpdateExtraChargeProfile } from './extra_charge.updateExtraChargeProfile-2'

type extra_charge =
  | ExtraChargeAddExtraChargeProfile
  | ExtraChargeDeleteExtraChargeProfile
  | ExtraChargeGetExtraChargeProfileByID
  | ExtraChargeGetExtraChargeProfileByName
  | ExtraChargeGetExtraChargeProfileNames
  | ExtraChargeGetExtraChargeProfiles
  | ExtraChargeUpdateExtraChargeProfile

export default extra_charge
