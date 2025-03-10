import { change, date } from 'common/changelog';
import { TALENTS_PRIEST } from 'common/TALENTS';
import SPELLS  from 'common/SPELLS'
import { Arlie, Hana, Tapir, ToppleTheNun } from 'CONTRIBUTORS';
import { SpellLink } from 'interface';


export default [
  change(date(2023, 11, 14), <>Add tracker for <SpellLink spell={TALENTS_PRIEST.VOID_SUMMONER_TALENT} /> CDR.</>, Arlie),
  change(date(2023, 11, 1), 'Added Amirdrassil 4p tracker.', Arlie),
  change(date(2023, 10, 27), <>Enable spec with 10.2 changes.</>, Arlie),
  change(date(2023, 10, 8), <>Updated <SpellLink spell={TALENTS_PRIEST.SHADOW_COVENANT_TALENT}/> for revamp - the heal has been removed and has various amps depending on talents selected.</>, Hana),
  change(date(2023, 10, 7), <>Added <SpellLink spell={TALENTS_PRIEST.SCHISM_TALENT}/></>, Hana),
  change(date(2023, 9, 15), <>Added new atonement damage sources which will appear in the new patch. Can be merged now as it doesn't break any old functionality.</>, Hana),
  change(date(2023, 8, 18), <>Cleared some console logs, updated some spells for cast efficiency, updated some mana costs</>, Hana),
  change(date(2023, 8, 12), <>'Add <SpellLink spell={TALENTS_PRIEST.WORDS_OF_THE_PIOUS_TALENT}/>'</>, Hana),
  change(date(2023, 8, 3), 'Update Rapture analysis now ignores off GCD spells and enchants', Tapir),
  change(date(2023, 8, 1), <>Add <SpellLink spell={TALENTS_PRIEST.BENEVOLENCE_TALENT}/></>, Hana),
  change(date(2023, 7, 3), 'Update SpellLink usage.', ToppleTheNun),
  change(date(2023, 5, 29), 'Fix Evangelism ramp crash.', ToppleTheNun),
  change(date(2023, 5, 5), <>Added <SpellLink spell={TALENTS_PRIEST.AEGIS_OF_WRATH_TALENT}/> module.</>, Hana),
  change(date(2023, 4, 16), <>Aberrus 2p added.</>, Hana),
  change(date(2023, 4, 14), <>Added <SpellLink spell={SPELLS.RADIANT_PROVIDENCE_BUFF}/> module.</>, Hana),
  change(date(2023, 3, 14), <><SpellLink spell={TALENTS_PRIEST.WEAL_AND_WOE_TALENT}/> added.</>, Hana),
  change(date(2023, 3, 7), <><SpellLink spell={TALENTS_PRIEST.CASTIGATION_TALENT}/> working with <SpellLink spell={SPELLS.DARK_REPRIMAND_CAST}/></>, Hana),
  change(date(2023, 2, 6), <><SpellLink spell={TALENTS_PRIEST.TWILIGHT_EQUILIBRIUM_TALENT}/> re enabled.</>, Hana),
  change(date(2023, 2, 2), <><SpellLink spell={TALENTS_PRIEST.ATONEMENT_TALENT}/> graph updated.</>, Hana),
  change(date(2023, 1, 29), <><SpellLink spell={TALENTS_PRIEST.ABYSSAL_REVERIE_TALENT}/> module added.</>, Hana),
  change(date(2023, 1, 28), <><SpellLink spell={TALENTS_PRIEST.EXPIATION_TALENT}/> bugfix.</>, Hana),
  change(date(2023, 1, 27), <><SpellLink spell={TALENTS_PRIEST.BLAZE_OF_LIGHT_TALENT}/> module no longer uses Atonement event.</>, Hana),
  change(date(2023, 1, 27), <>Begun 10.0.5 changes, updated <SpellLink spell={SPELLS.SINS_OF_THE_MANY}/> and<SpellLink spell={TALENTS_PRIEST.SHADOW_COVENANT_TALENT}/>. Bugfix for Solace vs Shield discipline module. </>, Hana),
  change(date(2023, 1, 22), <><SpellLink spell={TALENTS_PRIEST.MINDGAMES_TALENT}/> module no longer uses Atonement event.</>, Hana),
  change(date(2023, 1, 22), <><SpellLink spell={TALENTS_PRIEST.HARSH_DISCIPLINE_TALENT}/> module no longer uses Atonement event.</>, Hana),
  change(date(2023, 1, 21), <><SpellLink spell={TALENTS_PRIEST.SHADOW_COVENANT_TALENT}/> module.</>, Hana),
  change(date(2023, 1, 15), <><SpellLink spell={TALENTS_PRIEST.CASTIGATION_TALENT}/> module no longer uses Atonement event.</>, Hana),
  change(date(2023, 1, 15), <><SpellLink spell={TALENTS_PRIEST.SCHISM_TALENT}/> module no longer uses Atonement event.</>, Hana),
  change(date(2023, 1, 14), <><SpellLink spell={SPELLS.SINS_OF_THE_MANY}/> module no longer uses Atonement event.</>, Hana),
  change(date(2023, 1, 10), <><SpellLink spell={TALENTS_PRIEST.ATONEMENT_TALENT}/> refactor begun - added normalizer to create links between events.</>, Hana),
  change(date(2023, 1, 4), <><SpellLink spell={TALENTS_PRIEST.CRYSTALLINE_REFLECTION_TALENT}/> bugfixes.</>, Hana),
  change(date(2022, 12, 26), 'Disable Twilight Equilibrium analyzer.', ToppleTheNun),
  change(date(2022, 12, 11), <><SpellLink spell={TALENTS_PRIEST.RAPTURE_TALENT}/> added to guide.</>, Hana),
  change(date(2022, 11, 26), <>Enabled <SpellLink spell={TALENTS_PRIEST.BLAZE_OF_LIGHT_TALENT}/>.</>, Hana),
  change(date(2022, 11, 23), <>Support for <SpellLink spell={TALENTS_PRIEST.TWILIGHT_EQUILIBRIUM_TALENT}/>.</>, Hana),
  change(date(2022, 11, 23), <><SpellLink spell={TALENTS_PRIEST.SCHISM_TALENT}/> updated following nerfs.</>, Hana),
  change(date(2022, 11, 23), <><SpellLink spell={TALENTS_PRIEST.MALICIOUS_INTENT_TALENT}/> updated following buffs.</>, Hana),
  change(date(2022, 11, 23), <>Updated <SpellLink spell={TALENTS_PRIEST.CRYSTALLINE_REFLECTION_TALENT}/> following nerfs.</>, Hana),
  change(date(2022, 11, 8), <>Updated <SpellLink spell={TALENTS_PRIEST.TWIST_OF_FATE_TALENT}/> to use correct damage multiplier.</>, Hana),
  change(date(2022, 11, 7), <><SpellLink spell={TALENTS_PRIEST.PROTECTIVE_LIGHT_TALENT}/> support added.</>, Hana),
  change(date(2022, 11, 6), <>Added <SpellLink spell={TALENTS_PRIEST.BINDING_HEALS_TALENT}/> section to guide.</>, Hana),
  change(date(2022, 11, 6), <>Added DPS rotation to <SpellLink spell={TALENTS_PRIEST.EVANGELISM_TALENT}/> guide.</>, Hana),
  change(date(2022, 11, 5), <>Updated <SpellLink spell={SPELLS.SINS_OF_THE_MANY}/>.</>, Hana),
  change(date(2022, 11, 5), <>Added Resplendent Light.</>, Hana),
  change(date(2022, 10, 30), <>Showed <SpellLink spell={TALENTS_PRIEST.EVANGELISM_TALENT}/> casts and highlighted casts which are bad</>, Hana),
  change(date(2022, 10, 30), <>First backend section of <SpellLink spell={TALENTS_PRIEST.EVANGELISM_TALENT}/>.</>, Hana),
  change(date(2022, 10, 29), <>Hid tier bonus when not using it</>, Hana),
  change(date(2022, 10, 29), <>Added line break in <SpellLink spell={TALENTS_PRIEST.TWIST_OF_FATE_TALENT}/> module.</>, Hana),
  change(date(2022, 10, 23), <>Updated abilities file with new spells, updated mana costs of spells.</>, Hana),
  change(date(2022, 10, 23), <>Updated list of spells which are effected by healing increases.</>, Hana),
  change(date(2022, 10, 23), <>Updated <SpellLink spell={TALENTS_PRIEST.PURGE_THE_WICKED_TALENT}/> section to the Guide.</>, Hana),
  change(date(2022, 10, 22), <>Added <SpellLink spell={TALENTS_PRIEST.PURGE_THE_WICKED_TALENT}/> section to the Guide.</>, Hana),
  change(date(2022, 10, 22), <>Initial guide/suggestion revamp implementation, including section for <SpellLink spell={TALENTS_PRIEST.POWER_WORD_RADIANCE_TALENT}/></>, Hana),
  change(date(2022, 10, 22), <>Added <SpellLink spell={TALENTS_PRIEST.MALICIOUS_INTENT_TALENT}/>.</>, Hana),
  change(date(2022, 10, 16), <>Added <SpellLink spell={TALENTS_PRIEST.PAIN_AND_SUFFERING_TALENT}/> and <SpellLink spell={TALENTS_PRIEST.THROES_OF_PAIN_TALENT}/>.</>, Hana),
  change(date(2022, 10, 16), <>Added <SpellLink spell={TALENTS_PRIEST.POWER_WORD_RADIANCE_TALENT}/> module.</>, Hana),
  change(date(2022, 10, 16), <>Fixed <SpellLink spell={TALENTS_PRIEST.CONTRITION_TALENT}/>.</>, Hana),
  change(date(2022, 10, 15), <>Reorganised talents display</>, Hana),
  change(date(2022, 10, 15), <><SpellLink spell={SPELLS.POWER_WORD_SHIELD}/> bugfixes. </>, Hana),
  change(date(2022, 10, 15), <>Added Stolen Psyche.</>, Hana),
  change(date(2022, 10, 11), <>Added <SpellLink spell={TALENTS_PRIEST.CRYSTALLINE_REFLECTION_TALENT}/> module showing it's damage breakdown.</>, Hana),
  change(date(2022, 10, 10), <>Added generic <SpellLink spell={SPELLS.POWER_WORD_SHIELD}/> module which handles attribution of it's amplifiers</>, Hana),
  change(date(2022, 10, 8), <>Added <SpellLink spell={TALENTS_PRIEST.AEGIS_OF_WRATH_TALENT}/>.</>, Hana),
  change(date(2022, 10, 3), <>Added <SpellLink spell={TALENTS_PRIEST.EXPIATION_TALENT}/>.</>, Hana),
  change(date(2022, 10, 3), <>Added <SpellLink spell={TALENTS_PRIEST.INDEMNITY_TALENT}/>.</>, Hana),
  change(date(2022, 10, 3), <>Dragonflight Clean up.</>, Hana),
];
