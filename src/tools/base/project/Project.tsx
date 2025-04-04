
// ---------- import React Packs
import React from 'react';
import * as RN from 'react-native';

// ---------- import Variables Pack
// ---------- import Local Tools

// ---------- set Caps Inputs
type Tprops = {
  configData: {
    screens: any[];
    initCt: Record<string, any>;
    arrInitFuncs: (() => void)[];
  };
};

// ---------- set Main Component
export const Project = ({ configData }: Tprops) => {
  console.log('PROJETO 1');

  // ---------- set Data
  const { screens, arrInitFuncs } = configData;

  // ---------- call Functions (If Exists)
  React.useEffect(() => {
    const callFn = async () => {
      for (const currFunc of arrInitFuncs) await currFunc();
    };

    callFn().catch(err => console.log('Project Start Functions', { err }));
  }, []);

  console.log('PROJETO 2');

  const condWeb = RN.Platform.OS === 'web';

  const baseStl: RN.ViewStyle = {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  };

  console.log('PROJETO 3');
  return (
    <RN.View style={baseStl}>
      <RN.SafeAreaView
        style={{ width: '100%', height: '100%', overflow: 'hidden' }}
      >
        <RN.Text>mapElements</RN.Text>
        <RN.StatusBar barStyle={'light-content'} />
      </RN.SafeAreaView>
    </RN.View>
  );
};
