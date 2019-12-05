import { observable, action, computed } from 'mobx';
import { createContext } from 'react';

class HeaderStore {
  @observable items: Array<string> = [];
  @observable currentClasses = '';
  @observable nextClasses =
    'menu-default menu-sub-hidden main-hidden sub-hidden';
  @observable menuClickCount = 0;
  @observable containerClassnames = '';
  @action
  addItem = (item: string) => {
    this.items.push(item);
  };

  @action setContainerClassnames = (
    strCurrentClasses: string,
    selectedMenuHasSubItems: string
  ) => {
    const currentClasses = strCurrentClasses
      ? strCurrentClasses.split(' ').filter(x => x != '')
      : '';
    if (strCurrentClasses.includes('main-hidden')) {
      this.nextClasses = 'menu-default sub-hidden';
    } else {
      this.nextClasses = 'menu-default menu-sub-hidden main-hidden sub-hidden';
    }
    if (currentClasses.includes('menu-mobile')) {
      this.nextClasses += ' menu-mobile';
    }
  };
  @action clickOnMobileMenu = () => {};
  @action logoutUser = () => {};

  @computed
  get itemCount() {
    return this.items.length;
  }
  @computed
  get classNames() {
    return {
      containerClassnames: this.nextClasses
    };
  }
}

export const HeaderStoreContext = createContext(new HeaderStore());
