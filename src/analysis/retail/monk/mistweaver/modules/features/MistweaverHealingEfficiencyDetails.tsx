import { SpellLink } from 'interface';
import SPELLS from 'common/SPELLS';
import { TALENTS_MONK } from 'common/TALENTS';
import HealingEfficiencyBreakdown from 'parser/core/healingEfficiency/HealingEfficiencyBreakdown';
import HealingEfficiencyDetails from 'parser/core/healingEfficiency/HealingEfficiencyDetails';
import HealingEfficiencyTracker from 'parser/core/healingEfficiency/HealingEfficiencyTracker';
import Panel from 'parser/ui/Panel';

class MistweaverHealingEfficiencyDetails extends HealingEfficiencyDetails {
  static dependencies = {
    ...HealingEfficiencyDetails.dependencies,
    healingEfficiencyTracker: HealingEfficiencyTracker,
  };

  protected healingEfficiencyTracker!: HealingEfficiencyTracker;

  statistic() {
    return (
      <Panel
        title="Mana efficiency"
        explanation={
          <>
            <SpellLink spell={SPELLS.GUSTS_OF_MISTS} /> healing is added to the appropriate spell
            that caused the gust. <br /> <SpellLink spell={TALENTS_MONK.ESSENCE_FONT_TALENT} /> is
            given the healing from duplicated gusts, since without{' '}
            <SpellLink spell={TALENTS_MONK.ESSENCE_FONT_TALENT} /> the second gust would not have
            happened. <br />
            {this.selectedCombatant.hasTalent(TALENTS_MONK.ANCIENT_TEACHINGS_TALENT) && (
              <>
                <SpellLink spell={TALENTS_MONK.ANCIENT_TEACHINGS_TALENT} /> is given to the spell
                that applied the buff, either <SpellLink spell={TALENTS_MONK.ESSENCE_FONT_TALENT} />{' '}
                or <SpellLink spell={TALENTS_MONK.FAELINE_STOMP_TALENT} />. <br />
              </>
            )}
            <SpellLink spell={TALENTS_MONK.RENEWING_MIST_TALENT} /> healing from{' '}
            {this.selectedCombatant.hasTalent(TALENTS_MONK.RAPID_DIFFUSION_TALENT) && (
              <>
                <SpellLink spell={TALENTS_MONK.RAPID_DIFFUSION_TALENT} /> is given to the spell that
                procced it. <br />
              </>
            )}
            <SpellLink spell={TALENTS_MONK.ENVELOPING_MIST_TALENT} /> is given the healing of{' '}
            <SpellLink spell={SPELLS.ENVELOPING_BREATH_HEAL} /> since without casting{' '}
            <SpellLink spell={TALENTS_MONK.ENVELOPING_MIST_TALENT} />,{' '}
            <SpellLink spell={SPELLS.ENVELOPING_BREATH_HEAL} /> healing would not occur. <br />
            {this.selectedCombatant.hasTalent(TALENTS_MONK.MISTY_PEAKS_TALENT) && (
              <>
                <SpellLink spell={TALENTS_MONK.MISTY_PEAKS_TALENT} /> healing is attributed to the
                source cast of the <SpellLink spell={TALENTS_MONK.RENEWING_MIST_TALENT} /> that
                procced it.
              </>
            )}
            {this.selectedCombatant.hasTalent(TALENTS_MONK.SHAOHAOS_LESSONS_TALENT) && (
              <>
                <SpellLink spell={TALENTS_MONK.SHAOHAOS_LESSONS_TALENT} /> healing is attributed to{' '}
                <SpellLink spell={TALENTS_MONK.SHEILUNS_GIFT_TALENT} />.
              </>
            )}
          </>
        }
        pad={false}
        position={120}
      >
        <HealingEfficiencyBreakdown tracker={this.healingEfficiencyTracker} />
      </Panel>
    );
  }
}

export default MistweaverHealingEfficiencyDetails;
