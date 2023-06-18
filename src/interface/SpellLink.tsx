import * as React from 'react';
import { CSSProperties } from 'react';
import Spell from 'common/SPELLS/Spell';

import SpellIcon from './SpellIcon';
import useSpellInfo from './useSpellInfo';
import useTooltip from './useTooltip';
import { getSpellId } from 'common/getSpellId';

interface BaseProps extends Omit<React.HTMLAttributes<HTMLAnchorElement>, 'id'> {
  children?: React.ReactNode;
  icon?: boolean;
  iconStyle?: CSSProperties;
  ilvl?: number;
  rank?: number;
  def?: number;
}

interface PropsWithId extends BaseProps {
  /**
   * @deprecated use {@link spell} instead.
   */
  id: number | Spell;
  spell?: never;
}

interface PropsWithSpell extends BaseProps {
  /**
   * @deprecated use {@link spell} instead.
   */
  id?: never;
  spell: number | Spell;
}

type Props = PropsWithId | PropsWithSpell;

const SpellLink = React.forwardRef<HTMLAnchorElement, Props>(
  ({ id, spell, children, icon = true, iconStyle, ilvl, def, rank, ...other }: Props, ref) => {
    const spellData = spell ?? id;
    const spellId = getSpellId(spellData);
    const spellInfo = useSpellInfo(spellData);
    const { spell: spellTooltip } = useTooltip();

    return (
      <a
        href={spellTooltip(spellId, { ilvl, rank, def })}
        target="_blank"
        rel="noopener noreferrer"
        ref={ref}
        className="spell-link-text"
        {...other}
      >
        {icon && (
          <>
            <SpellIcon spell={spellData} noLink style={iconStyle} alt="" />{' '}
          </>
        )}
        {children || (spellInfo?.name ? spellInfo.name : `Unknown spell: ${spellId}`)}
      </a>
    );
  },
);

export default SpellLink;
