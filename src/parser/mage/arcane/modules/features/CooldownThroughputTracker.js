import SPELLS from 'common/SPELLS';
import CoreCooldownThroughputTracker, { BUILT_IN_SUMMARY_TYPES } from 'parser/shared/modules/CooldownThroughputTracker';

const debug = false;

class CooldownThroughputTracker extends CoreCooldownThroughputTracker {
  static cooldownSpells = [
    ...CoreCooldownThroughputTracker.cooldownSpells,
    {
      spell: SPELLS.ARCANE_POWER,
      buffer: 4000,
      summary: [
        BUILT_IN_SUMMARY_TYPES.DAMAGE,
      ],
    },
    {
      spell: SPELLS.RUNE_OF_POWER_TALENT,
      summary: [
        BUILT_IN_SUMMARY_TYPES.DAMAGE,
      ],
    },
  ];

  static castCooldowns = [
    {
      spell: SPELLS.MIRROR_IMAGE_TALENT,
      duration: 40,
      summary: [
        BUILT_IN_SUMMARY_TYPES.DAMAGE,
      ],
    },
  ];

  previousCasts = [];

  on_byPlayer_cast(event) {
    const spellId = event.ability.guid;
    const cooldownSpell = this.constructor.castCooldowns.find(cooldownSpell => cooldownSpell.spell.id === spellId);

    //Keep 4 Seconds worth of events
    this.previousCasts.forEach(cast => {
      if (cast.timestamp < event.timestamp - 4000) {
        this.previousCasts.shift();
      }
    });
    this.previousCasts.push(event);

    if (cooldownSpell) {
      // adding the fixed cooldown, now we need to remove it from activeCooldowns too
      const cooldown = this._addFixedCooldown(cooldownSpell, event.timestamp);
      this.activeCooldowns.push(cooldown);
      debug && console.log(`%cCooldown started: ${cooldownSpell.spell.name}`, 'color: green', cooldown);
    }
    // super.on_byPlayer_cast(event) would call trackEvent anyway
    super.on_byPlayer_cast && super.on_byPlayer_cast(event);
  }

  addCooldown(cooldownSpell, timestamp) {
    const cooldown = {
      ...cooldownSpell,
      start: timestamp - (cooldownSpell.buffer || 0),
      end: null,
      events: [],
    };
    //this.cooldownPreSpells = this.previousCasts.reverse();
    this.previousCasts.reverse().forEach(event => cooldown.events.unshift(event));
    this.pastCooldowns.push(cooldown);
    return cooldown;
  }

  _addFixedCooldown(cooldownSpell, timestamp) {
    const cooldown = {
      ...cooldownSpell,
      start: timestamp,
      end: timestamp + cooldownSpell.duration * 1000,
      events: [],
    };
    this.pastCooldowns.push(cooldown);
    return cooldown;
  }

  // on_event() might be more accurate but it would be most likely called much more
  trackEvent(event) {
    this.activeCooldowns = this.activeCooldowns.filter(cooldown => !cooldown.end || event.timestamp < cooldown.end);
    super.trackEvent(event);
  }

  on_byPlayerPet_damage(event) {
    this.trackEvent(event);
  }
}

export default CooldownThroughputTracker;
