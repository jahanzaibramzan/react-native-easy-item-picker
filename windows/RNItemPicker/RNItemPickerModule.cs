using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Item.Picker.RNItemPicker
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNItemPickerModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNItemPickerModule"/>.
        /// </summary>
        internal RNItemPickerModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNItemPicker";
            }
        }
    }
}
