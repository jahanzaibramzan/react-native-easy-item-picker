require 'json'

package = JSON.parse(File.read(File.join(__dir__, '../package.json')))

Pod::Spec.new do |s|
  s.name         = "RNItemPicker"
  s.version      = package['version']
  s.summary      = "React Native item picker for Android and iOS"

  s.homepage     = package['homepage']
  s.license      = package['license']
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "Jahanzaib" => "jahanzaibramzan@gmail.com" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/jahanzaibramzan/react-native-easy-item-picker.git", :tag => "master" }
  s.source_files  = "RNItemPicker/**/*.{h,m}"
  s.requires_arc = true

  s.dependency "React"
  #s.dependency "others"

end

  